import React, { useState } from 'react';
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  H1, 
  H2,
  H4,
  Separator,
  ScrollView,
  Progress 
} from '@tamagui/core';
import { SafeAreaView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { Heart, Calendar, Activity, Camera } from '@tamagui/lucide-icons';

export default function PetProfileScreen() {
  const route = useRoute();
  // @ts-ignore
  const { pet } = route.params || {};
  
  const [healthScore] = useState(85);
  
  if (!pet) {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <YStack padding="$4" alignItems="center" justifyContent="center" flex={1}>
          <Text>Pet information not found</Text>
        </YStack>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <YStack padding="$4" space="$4">
          <Card elevate size="$4" bordered>
            <Card.Header>
              <XStack justifyContent="space-between" alignItems="center">
                <YStack>
                  <H1>{pet.name}</H1>
                  <Text fontSize="$5" color="$gray10">
                    {pet.breed} • {pet.age}
                  </Text>
                </YStack>
                <Button
                  size="$3"
                  icon={Camera}
                  circular
                  onPress={() => {
                    // TODO: Implement photo taking functionality
                    Alert.alert('Feature Coming Soon', 'Photo capture will be available soon!');
                  }}
                />
              </XStack>
            </Card.Header>
          </Card>
          
          <Separator />
          
          <Card elevate size="$4" bordered>
            <Card.Header>
              <H2>Health Overview</H2>
            </Card.Header>
            <Card.Body>
              <YStack space="$3">
                <XStack justifyContent="space-between" alignItems="center">
                  <Text fontSize="$4">Health Score</Text>
                  <Text fontSize="$4" fontWeight="bold" color="$green10">
                    {healthScore}%
                  </Text>
                </XStack>
                <Progress value={healthScore} max={100} size="$2">
                  <Progress.Indicator animation="bouncy" backgroundColor="$green9" />
                </Progress>
                
                <XStack justifyContent="space-between" alignItems="center" marginTop="$3">
                  <XStack alignItems="center" space="$2">
                    <Calendar size={16} color="$blue8" />
                    <Text fontSize="$3" color="$gray10">Last Vet Visit</Text>
                  </XStack>
                  <Text fontSize="$3">{pet.lastVet}</Text>
                </XStack>
              </YStack>
            </Card.Body>
          </Card>
          
          <YStack space="$3">
            <H4>Quick Actions</H4>
            
            <Button
              size="$4"
              icon={Heart}
              theme="red"
              onPress={() => {
                // TODO: Navigate to health records
                Alert.alert('Feature Coming Soon', 'Health records tracking will be available soon!');
              }}
            >
              View Health Records
            </Button>
            
            <Button
              size="$4"
              icon={Activity}
              theme="blue"
              onPress={() => {
                // TODO: Navigate to activity tracking
                Alert.alert('Feature Coming Soon', 'Activity tracking will be available soon!');
              }}
            >
              Track Activity
            </Button>
            
            <Button
              size="$4"
              icon={Calendar}
              theme="green"
              onPress={() => {
                // TODO: Navigate to appointment scheduling
                Alert.alert('Feature Coming Soon', 'Appointment scheduling will be available soon!');
              }}
            >
              Schedule Appointment
            </Button>
          </YStack>
          
          <Card elevate size="$4" bordered marginTop="$4">
            <Card.Header>
              <H4>Recent Activities</H4>
            </Card.Header>
            <Card.Body>
              <YStack space="$2">
                <Text fontSize="$3" color="$gray10">• Walked for 30 minutes</Text>
                <Text fontSize="$3" color="$gray10">• Fed at 8:00 AM</Text>
                <Text fontSize="$3" color="$gray10">• Played fetch for 15 minutes</Text>
                <Text fontSize="$3" color="$gray10">• Weight recorded: 25.5 kg</Text>
              </YStack>
            </Card.Body>
          </Card>
        </YStack>
      </ScrollView>
    </SafeAreaView>
  );
}