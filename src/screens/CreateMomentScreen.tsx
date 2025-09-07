import React, { useState } from 'react';
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  H2,
  Input,
  TextArea,
  Separator,
  ScrollView,
  Avatar,
  Select,
  Adapt,
  Sheet
} from '@tamagui/core';
import { SafeAreaView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Camera, Image as ImageIcon, Save, X } from '@tamagui/lucide-icons';

export default function CreateMomentScreen() {
  const navigation = useNavigation();
  const [selectedPet, setSelectedPet] = useState('');
  const [title, setTitle] = useState('');
  const [story, setStory] = useState('');
  const [photo, setPhoto] = useState('');

  const pets = [
    { id: '1', name: 'Max', emoji: '🐕' },
    { id: '2', name: 'Luna', emoji: '🐱' }
  ];

  const handleSave = () => {
    if (!selectedPet || !title || !story) {
      Alert.alert('请完善信息', '请填写完整的宠物、标题和故事内容');
      return;
    }
    
    // TODO: Save to database
    Alert.alert('保存成功！', '你的宠物趣事已经记录下来了 🎉', [
      { text: '确定', onPress: () => navigation.goBack() }
    ]);
  };

  const handleTakePhoto = () => {
    // TODO: Implement camera functionality
    Alert.alert('拍照功能', '相机功能开发中...');
  };

  const handleSelectImage = () => {
    // TODO: Implement image picker
    Alert.alert('选择图片', '图片选择功能开发中...');
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '$background' }}>
      <YStack flex={1}>
        {/* Header */}
        <XStack 
          padding="$4" 
          justifyContent="space-between" 
          alignItems="center"
          borderBottomWidth={1}
          borderBottomColor="$borderColor"
        >
          <Button
            size="$3"
            variant="ghost"
            icon={X}
            onPress={() => navigation.goBack()}
          />
          
          <H2>记录趣事</H2>
          
          <Button
            size="$3"
            theme="blue"
            icon={Save}
            onPress={handleSave}
          >
            保存
          </Button>
        </XStack>

        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <YStack space="$4" padding="$4">
            
            {/* Pet Selection */}
            <Card elevate size="$4" bordered>
              <Card.Header>
                <Text fontSize="$4" fontWeight="600">选择宠物</Text>
              </Card.Header>
              <Card.Body>
                <Select value={selectedPet} onValueChange={setSelectedPet}>
                  <Select.Trigger width="100%">
                    <Select.Value placeholder="选择一个宠物..." />
                  </Select.Trigger>
                  
                  <Adapt when="sm" platform="touch">
                    <Sheet modal dismissOnSnapToBottom>
                      <Sheet.Frame>
                        <Sheet.ScrollView>
                          <Adapt.Contents />
                        </Sheet.ScrollView>
                      </Sheet.Frame>
                      <Sheet.Overlay />
                    </Sheet>
                  </Adapt>
                  
                  <Select.Content>
                    {pets.map((pet) => (
                      <Select.Item key={pet.id} index={pet.id} value={pet.id}>
                        <XStack space="$3" alignItems="center">
                          <Text fontSize="$5">{pet.emoji}</Text>
                          <Select.ItemText>{pet.name}</Select.ItemText>
                        </XStack>
                      </Select.Item>
                    ))}
                  </Select.Content>
                </Select>
              </Card.Body>
            </Card>

            {/* Title Input */}
            <Card elevate size="$4" bordered>
              <Card.Header>
                <Text fontSize="$4" fontWeight="600">趣事标题</Text>
              </Card.Header>
              <Card.Body>
                <Input
                  placeholder="给这个有趣的时刻起个标题..."
                  value={title}
                  onChangeText={setTitle}
                  fontSize="$4"
                />
              </Card.Body>
            </Card>

            {/* Story Input */}
            <Card elevate size="$4" bordered>
              <Card.Header>
                <Text fontSize="$4" fontWeight="600">故事内容</Text>
              </Card.Header>
              <Card.Body>
                <TextArea
                  placeholder="分享这个有趣的故事吧！可以描述当时的情景、宠物的表现、你的感受等..."
                  value={story}
                  onChangeText={setStory}
                  minHeight={120}
                  fontSize="$4"
                />
              </Card.Body>
            </Card>

            {/* Photo Section */}
            <Card elevate size="$4" bordered>
              <Card.Header>
                <Text fontSize="$4" fontWeight="600">添加照片 (可选)</Text>
              </Card.Header>
              <Card.Body>
                <XStack space="$3" justifyContent="center">
                  <Button
                    size="$4"
                    theme="blue"
                    icon={Camera}
                    flex={1}
                    onPress={handleTakePhoto}
                  >
                    拍照
                  </Button>
                  
                  <Button
                    size="$4"
                    theme="green"
                    icon={ImageIcon}
                    flex={1}
                    onPress={handleSelectImage}
                  >
                    选择图片
                  </Button>
                </XStack>
                
                {photo && (
                  <YStack marginTop="$3">
                    <Text fontSize="$3" color="$gray10" textAlign="center">
                      已选择照片
                    </Text>
                  </YStack>
                )}
              </Card.Body>
            </Card>

            {/* Preview Section */}
            {selectedPet && title && story && (
              <Card elevate size="$4" bordered theme="blue">
                <Card.Header>
                  <Text fontSize="$4" fontWeight="600" color="$blue10">预览</Text>
                </Card.Header>
                <Card.Body>
                  <XStack space="$3" alignItems="center" marginBottom="$3">
                    <Avatar circular size="$4">
                      <Avatar.Fallback backgroundColor="$blue4">
                        <Text fontSize="$4">
                          {pets.find(p => p.id === selectedPet)?.emoji}
                        </Text>
                      </Avatar.Fallback>
                    </Avatar>
                    <YStack flex={1}>
                      <Text fontWeight="600">
                        {pets.find(p => p.id === selectedPet)?.name}
                      </Text>
                      <Text fontSize="$3" color="$gray10">刚刚</Text>
                    </YStack>
                  </XStack>
                  
                  <Text fontSize="$4" fontWeight="600" marginBottom="$2">
                    {title}
                  </Text>
                  <Text fontSize="$4" lineHeight="$2">
                    {story.length > 100 ? story.substring(0, 100) + '...' : story}
                  </Text>
                </Card.Body>
              </Card>
            )}

            {/* Tips */}
            <Card size="$4" backgroundColor="$yellow2" borderColor="$yellow6">
              <Card.Body>
                <Text fontSize="$3" color="$yellow11" textAlign="center">
                  💡 小贴士：记录下宠物的有趣瞬间，让美好回忆永远保存！
                </Text>
              </Card.Body>
            </Card>

          </YStack>
        </ScrollView>
      </YStack>
    </SafeAreaView>
  );
}