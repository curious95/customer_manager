from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

engine = create_engine('sqlite://///home/groot/workspace/customer_manager/app/db/customer_manager')
Session = sessionmaker(bind=engine)

Base = declarative_base()
