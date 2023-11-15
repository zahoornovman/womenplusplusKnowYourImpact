# -*- coding: utf-8 -*-
"""
Created on Sat Nov 11 18:37:54 2023

@author: Ana Lugo
"""

import pandas as pd
import numpy as np
from faker import Faker
from random import randint 

# create some fake data
fake = Faker()

# function to create a dataframe with fake values for participants
def make_participants(num):
    
    # lists to randomly assign to participants
    gender_list = ['Male', 'Female', 'Non-binary']
    education_list = ['PhD','Undergraduate','Masters degree', 'Prefer not to say']
    accepted_list = ['Yes','No']
    attended_list = ['Yes','No']
    backgroundit_list = ['Yes', 'No']
    satisfaction_list = ['very dissatisfied', 'satisfied', 'neutral', 'dissatisfied']
    employment_list = ['Senior Associate','Manager','Associate','Junior','Senior Manager']
    careerinterests_list = ['solutions design','pm','azure','python','.net','javascript','sql']
    newskill_list = ['UI/UX', 'Software Development','Pitch','Data Scientist','full stack developer']
    
    fake_participants = [{'ID': randint(1, 1000),
        'name':fake.name(), 
        'Applied': 'Yes',
        'gender': np.random.choice(gender_list),
        'age':np.random.randint(25,60),
        'background in IT': np.random.choice(backgroundit_list),
        'education': np.random.choice(education_list),
        'accepted': np.random.choice(accepted_list),
        'attended': np.random.choice(attended_list),
        'number of Hackathons': np.random.randint(0,10),
        'employment': np.random.choice(employment_list),
        'satisfaction': np.random.choice(satisfaction_list),
        'career interests': np.random.choice(careerinterests_list),
        'country': fake.country(),
        'new skill': np.random.choice(newskill_list)
        
    }]
        
    return fake_participants

participants_df = pd.DataFrame(make_participants(num=1))

i=1
while i < 1000:
    participants_df = participants_df.append(pd.DataFrame(make_participants(num=1)))
    i += 1
participants_df.to_csv('data_participants_2023).csv')
