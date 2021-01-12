from django.contrib.auth import get_user_model 
import graphene 
from graphene_django import DjangoObjectType 
from datetime import date

from uhg.models import Hiker, Hike
from uhg.schema import HikeType

class UserType(DjangoObjectType):
   class Meta:
      model = get_user_model()

class HikerType(DjangoObjectType):
   class Meta:
      model = Hiker

class Query(graphene.ObjectType):
   hikers = graphene.List(HikerType)
   hiker = graphene.Field(HikerType, hikerID=graphene.Int(required=True))
   age = graphene.Int(hikerID=graphene.Int(required=True))
   recent_hikes = graphene.List(HikeType, hikerID=graphene.Int(required=True))

   def resolve_hiker(self, info, hikerID):
      return Hiker.objects.get(id=hikerID)

   def resolve_age(self, info, hikerID):
      hiker = Hiker.objects.get(id=hikerID)
      age = -1
      if hiker.birthday:
         age = date.today() - hiker.birthday 
         age = int(age.days / 365)
      return age

   def resolve_hikers(self, info):
      return Hiker.objects.all() 

   def resolve_recent_hikes(self, info, hikerID):
      return Hike.objects.filter(hiker__id=hikerID).order_by('-checkInDate')

class CreateHiker(graphene.Mutation):
   hiker = graphene.Field(HikerType)

   class Arguments:
      username = graphene.String(required=True)
      password = graphene.String(required=True)
      email = graphene.String(required=True)
      firstName = graphene.String()
      lastName = graphene.String()
      city = graphene.String()
      state = graphene.String()
      birthday = graphene.Date() 
      skillLevel = graphene.Int(required=True) 
      bio = graphene.String() 

   def mutate(self, info, username, password, email, skillLevel, **kwargs):
      firstName = kwargs.get('firstName', "")
      lastName = kwargs.get('lastName', "")
      city = kwargs.get('city', None)
      state = kwargs.get('state', None)
      birthday = kwargs.get('birthday', None)
      bio = kwargs.get('bio', None)
      user = get_user_model()(username=username, email=email, first_name=firstName, last_name=lastName)
      user.set_password(password)
      user.save()
      hiker = Hiker(user=user, city=city, state=state, birthday=birthday, skillLevel=skillLevel, bio=bio)
      hiker.save()
      return CreateHiker(hiker=hiker)

################################ vvvvvvvvvvvvvv TESTING: POPULATE TABLES vvvvvvvvvvvvvvv ##############################################
class PopHiker(graphene.Mutation):
   hiker = graphene.Field(HikerType)

   class Arguments:
      username = graphene.String()
      password = graphene.String()
      email = graphene.String()
      firstName = graphene.String()
      lastName = graphene.String()
      city = graphene.String()
      state = graphene.String()
      birthday = graphene.Date() 
      skillLevel = graphene.Int() 
      bio = graphene.String() 

   def mutate(self, info):
      count = Hiker.objects.all().count()
      username = "user" + str(count+1)
      password = username
      email = "user" + str(count+1) + "@gmail.com"
      firstName = "fName" + str(count+1)
      lastName = "lName" + str(count+1)
      city = "city" + str(count+1)
      state = "state" + str(count+1)
      birthday = None 
      skillLevel = count % 3 + 1
      bio = "bio" + str(count+1)
      user = get_user_model()(username=username, email=email, first_name=firstName, last_name=lastName)
      user.set_password(password)
      user.save()
      hiker = Hiker(user=user, city=city, state=state, birthday=birthday, skillLevel=skillLevel, bio=bio)
      hiker.save()
      return CreateHiker(hiker=hiker)
################################ ^^^^^^^^^^^^^^^ TESTING: POPULATE TABLES ^^^^^^^^^^^^^^^^ ##############################################


class Mutation(graphene.ObjectType):
   create_hiker = CreateHiker.Field()

   ############ vvvvvvv TESTING: POPULATE TABLES vvvvvv ###########
   pop_hiker = PopHiker.Field()