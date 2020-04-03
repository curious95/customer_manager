import os


class Config:

    def __init__(self):
        self.sms_templates = os.getenv('TEMPLATE_DIR', '/home/groot/workspace/customer_manager/sms_templates/*.stp')
        self.voice_templates = os.getenv('TEMPLATE_DIR', '/home/groot/workspace/customer_manager/voice_templates/*.vtp')