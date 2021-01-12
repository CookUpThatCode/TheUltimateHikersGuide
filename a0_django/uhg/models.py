from django.db import models
from django.contrib.auth import get_user_model

class Trail(models.Model):
   name = models.CharField(max_length=50)
   prop = models.CharField(max_length=50)
   city = models.CharField(max_length=50)
   state = models.CharField(max_length=50)
   description = models.CharField(max_length=50)
   isOpen = models.BooleanField()
   altitudeChange = models.IntegerField()
   distance = models.IntegerField()
   fee = models.FloatField()

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['name', 'prop'], name='uniqueTrail')
      ]

   # def __str__(self):
   #    # return self.name+"|"+hikes__difficulty
   #    return self.name+"|"+self.hikes__difficulty
   
class Hike(models.Model):
   trail = models.ForeignKey('uhg.Trail', related_name='hikes', on_delete=models.CASCADE)
   hiker = models.ForeignKey('uhg.Hiker', related_name='hikes', on_delete=models.CASCADE)
   checkInDate = models.DateTimeField(auto_now_add=True)
   checkOutDate = models.DateTimeField(null=True) 
   review = models.CharField(max_length=500, null=True)
   difficulty = models.IntegerField(null=True) 
   enjoyability = models.IntegerField(null=True)

   class Meta: 
      constraints = [
         models.UniqueConstraint(fields=['hiker', 'trail', 'checkInDate'], name='uniqueHikes')
      ]

class Buddy(models.Model):
   hikeID = models.ForeignKey('uhg.Hike', related_name='buddies', on_delete=models.CASCADE)
   friendID = models.ForeignKey('uhg.Hiker', related_name='buddies', on_delete=models.CASCADE)

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['hikeID', 'friendID'], name='uniqueBuddy'),
         # models.CheckConstraint(check=models.Q(hikeID__hikerID__id__lt = 3), name='checkBuddy_notSelf'),
         # models.CheckConstraint(check=models.Q(hikeID__hikerID__id != friendID__id), name='checkBuddy_notSelf'),
      ]

class EquipmentUsed(models.Model):
   hikeID = models.ForeignKey('uhg.Hike', related_name='equipmentUsed', on_delete=models.CASCADE)
   equipmentID = models.ForeignKey('uhg.EquipmentType', on_delete=models.CASCADE)

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['hikeID', 'equipmentID'], name='uniqueEquipmentUsed')
      ]

class SuggestedEquipment(models.Model):
   trailID = models.ForeignKey('uhg.Trail', related_name='suggestedEquipment', on_delete=models.CASCADE)
   equipmentTypeID = models.ForeignKey('uhg.EquipmentType', on_delete=models.CASCADE)

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['trailID', 'equipmentTypeID'], name='uniqueSuggestedEquipment')
      ]

class Tag(models.Model):
   trailID = models.ForeignKey('uhg.Trail', related_name='tags', on_delete=models.CASCADE)
   tag = models.CharField(max_length=20)

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['trailID', 'tag'], name='uniqueTag')
      ]

class Friend(models.Model):
   hikerID = models.ForeignKey('uhg.Hiker', related_name='friends', on_delete=models.CASCADE)
   friendID = models.ForeignKey('uhg.Hiker', related_name='friendedBy', on_delete=models.CASCADE)
   friendedBack = models.BooleanField()

   class Meta: 
      constraints = [
         models.UniqueConstraint(fields=['hikerID', 'friendID'], name='uniqueFriend')
      ]

class Message(models.Model):
   hikerID = models.ForeignKey('uhg.Hiker', related_name='messagesSent', on_delete=models.CASCADE)
   recipientID = models.ForeignKey('uhg.Hiker', related_name='messagesReceived', on_delete=models.CASCADE)
   timeSent = models.DateTimeField(auto_now_add=True)
   content = models.CharField(max_length = 500)

   class Meta:
      constraints = [
         models.UniqueConstraint(fields=['hikerID', 'recipientID', 'timeSent'], name='uniqueMessage')
      ]

class EquipmentType(models.Model):
   equType = models.CharField(max_length=20, unique=True)

class Hiker(models.Model):
   # user = models.OneToOneField(get_user_model(), null=True, on_delete=models.CASCADE)
   user = models.OneToOneField(get_user_model(), on_delete=models.CASCADE)
   birthday = models.DateField(null=True)
   city = models.CharField(max_length=50, null=True)
   state = models.CharField(max_length=50, null=True) 
   skillLevel = models.IntegerField() 
   bio = models.CharField(max_length=500, null=True)



