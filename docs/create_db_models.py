import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, Float, ForeignKey, DateTime
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from datetime import datetime
# from logic_bank.logic_bank import LogicBank
# from logic_bank.rule_bank import rule_bank_withdraw

# Define the engine and base class for ORM
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite', echo=False)
Base = declarative_base()

Session = sessionmaker(bind=engine)
session = Session()
class Customer(Base):
    """description: Table for storing customer information."""
    __tablename__ = 'customers'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    email = Column(String)
    balance = Column(Float, default=0.0)
    credit_limit = Column(Float)

class Order(Base):
    """description: Table for customer orders. Includes a notes field."""
    __tablename__ = 'orders'
    
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    date_ordered = Column(DateTime, default=datetime.now)
    date_shipped = Column(DateTime, nullable=True)
    amount_total = Column(Float, default=0.0)
    notes = Column(String)

class Item(Base):
    """description: Table for order items. Includes quantities and computed amounts."""
    __tablename__ = 'items'
    
    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey('orders.id'))
    product_id = Column(Integer, ForeignKey('products.id'))
    quantity = Column(Integer)
    unit_price = Column(Float)
    amount = Column(Float, default=0.0)

class Product(Base):
    """description: Product details including price."""
    __tablename__ = 'products'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)
    unit_price = Column(Float)

class Supplier(Base):
    """description: Suppliers providing products."""
    __tablename__ = 'suppliers'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)

class Inventory(Base):
    """description: Inventory records for products."""
    __tablename__ = 'inventory'
    
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    quantity = Column(Integer)

class Category(Base):
    """description: Categories for grouping products."""
    __tablename__ = 'categories'
    
    id = Column(Integer, primary_key=True)
    name = Column(String)

class Address(Base):
    """description: Addresses for customers and suppliers."""
    __tablename__ = 'addresses'
    
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'), nullable=True)
    supplier_id = Column(Integer, ForeignKey('suppliers.id'), nullable=True)
    address_line_1 = Column(String)
    address_line_2 = Column(String, nullable=True)
    city = Column(String)
    zipcode = Column(String)

class Payment(Base):
    """description: Payments made by customers."""
    __tablename__ = 'payments'
    
    id = Column(Integer, primary_key=True)
    customer_id = Column(Integer, ForeignKey('customers.id'))
    order_id = Column(Integer, ForeignKey('orders.id'))
    amount = Column(Float)
    date = Column(DateTime, default=datetime.now)

class Shipment(Base):
    """description: Shipment details for orders."""
    __tablename__ = 'shipments'
    
    id = Column(Integer, primary_key=True)
    order_id = Column(Integer, ForeignKey('orders.id'))
    shipment_date = Column(DateTime, default=datetime.now)
    carrier = Column(String)
    tracking_number = Column(String)

class Promotion(Base):
    """description: Promotions applicable to products or orders."""
    __tablename__ = 'promotions'
    
    id = Column(Integer, primary_key=True)
    description = Column(String)
    discount_percent = Column(Float)

class Review(Base):
    """description: Customer reviews for products."""
    __tablename__ = 'reviews'
    
    id = Column(Integer, primary_key=True)
    product_id = Column(Integer, ForeignKey('products.id'))
    customer_id = Column(Integer, ForeignKey('customers.id'))
    rating = Column(Integer)
    comment = Column(String)
Base.metadata.create_all(engine)
def declare_logic():
    # from logic_bank.rule_bank.rule_bank_setup import setup
    # from logic_bank.rule_type.sum import Sum
    # from logic_bank.rule_type.formula import Formula
    # from logic_bank.rule_type.constraint import Constraint
    # from logic_bank.rule_type.copy import Copy

    # Setup Logic Bank rules
    Rule = setup()

    Rule.formula(derive=Item.amount, as_expression=lambda row: row.quantity * row.unit_price)
    Rule.sum(derive=Order.amount_total, as_sum_of=Item.amount)
    Rule.sum(derive=Customer.balance, as_sum_of=Order.amount_total, where=lambda row: row.date_shipped is None)
    Rule.constraint(validate=Customer, as_condition=lambda row: row.balance <= row.credit_limit,
                    error_msg="Customer's balance exceeds the credit limit.")

    Rule.copy(derive=Item.unit_price, from_parent=Product.unit_price)

# LogicBank.activate(session=session, activator=declare_logic)
# Adding Products
products = [
    Product(name='Product1', unit_price=10.0),
    Product(name='Product2', unit_price=20.0),
]
session.add_all(products)
session.commit()

# Adding Customers
customers = [
    Customer(name='Customer One', email='email1@example.com', credit_limit=500.0),
    Customer(name='Customer Two', email='email2@example.com', credit_limit=800.0)
]
session.add_all(customers)
session.commit()

# Adding Orders and Items
orders = [
    Order(customer_id=1, notes="First order"),
    Order(customer_id=2, notes="Second order")
]
session.add_all(orders)
session.commit()

items = [
    Item(order_id=1, product_id=1, quantity=5),
    Item(order_id=2, product_id=2, quantity=3)
]
session.add_all(items)
session.commit()

# Creating additional records for other tables (abbreviated here for brevity)
# Add other tables such as Supplier, Inventory, etc. in a similar way

session.commit()
