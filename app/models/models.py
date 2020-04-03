from sqlalchemy import Column, TEXT, INTEGER
from app.models.base_ import Base

import time


def current_milli_time():
    return int(round(time.time() * 1000))


class Users(Base):
    __tablename__ = 'users'
    user_id = Column(TEXT, primary_key=True)
    name = Column(TEXT)
    p_hash = Column(TEXT)
    u_hash = Column(TEXT)

    def __init__(self, user_id, name, p_hash, u_hash):
        self.user_id = user_id
        self.name = name
        self.p_hash = p_hash
        self.u_hash = u_hash


class Customers(Base):
    __tablename__ = 'customer'
    owner_name = Column(TEXT)
    company_name = Column(TEXT, primary_key=True)
    email = Column(TEXT, primary_key=True)
    state = Column(TEXT)
    phone = Column(TEXT, primary_key=True)
    status = Column(INTEGER)
    created_at = Column(INTEGER)

    def __init__(self, company_name, owner_name, email, state, phone, status=0):
        self.state = state
        self.owner_name = owner_name
        self.company_name = company_name
        self.email = email
        self.phone = phone
        self.status = status
        self.created_at = current_milli_time()


class History(Base):
    __tablename__ = 'history'
    company_name = Column(TEXT, primary_key=True)
    phone = Column(TEXT)
    sms_template = Column(TEXT)
    sms_status = Column(TEXT)
    scheduled_sms = Column(TEXT)
    voice_template = Column(TEXT)
    voice_status = Column(TEXT)
    scheduled_voice = Column(TEXT)
    logged_at = Column(INTEGER)

    def __init__(self, company_name, phone, sms_template, sms_status, scheduled_sms, voice_template, voice_status,
                 scheduled_voice):
        self.company_name = company_name
        self.phone = phone
        self.sms_template = sms_template
        self.sms_status = sms_status
        self.scheduled_sms = scheduled_sms
        self.voice_template = voice_template
        self.voice_status = voice_status
        self.scheduled_voice = scheduled_voice
        self.logged_at = current_milli_time()


class Reminders(Base):
    __tablename__ = 'reminders'
    company_name = Column(TEXT, primary_key=True)
    phone = Column(TEXT , primary_key=True)
    sms_template = Column(TEXT)
    scheduled_sms = Column(TEXT)
    voice_template = Column(TEXT)
    scheduled_voice = Column(TEXT)

    def __init__(self, company_name, phone, sms_template, scheduled_sms, voice_template, scheduled_voice):
        self.company_name = company_name
        self.phone = phone
        self.sms_template = sms_template
        self.scheduled_sms = scheduled_sms
        self.voice_template = voice_template
        self.scheduled_voice = scheduled_voice
