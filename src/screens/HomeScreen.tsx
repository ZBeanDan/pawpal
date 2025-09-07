import React, { useState } from 'react';
import { 
  YStack, 
  XStack, 
  Text, 
  Button, 
  Card, 
  H1, 
  H3,
  H4,
  Separator,
  ScrollView,
  Image,
  Avatar
} from '@tamagui/core';
import { SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Plus, Camera, Heart, MessageCircle, Share2 } from '@tamagui/lucide-icons';

interface PetMoment {
  id: string;
  petName: string;
  petAvatar: string;
  timestamp: string;
  title: string;
  story: string;
  photo?: string;
  likes: number;
  comments: number;
}

export default function HomeScreen() {
  const navigation = useNavigation();
  const [petMoments] = useState<PetMoment[]>([
    {
      id: '1',
      petName: 'Max',
      petAvatar: '🐕',
      timestamp: '2小时前',
      title: '午后阳光浴时光',
      story: 'Max今天找到了客厅里最温暖的那块阳光，懒懒地躺了整整一个下午。看着他这么惬意的样子，我都不忍心叫他起来吃饭了！',
      photo: 'https://images.unsplash.com/photo-1552053831-71594a27632d?w=300',
      likes: 12,
      comments: 3
    },
    {
      id: '2', 
      petName: 'Luna',
      petAvatar: '🐱',
      timestamp: '5小时前',
      title: '偷吃小能手',
      story: '发现Luna偷偷爬上桌子想要吃我的三明治！被抓到的那一刻，她居然还理直气壮地喵了一声，好像在说"这有什么不对的吗？"',
      likes: 18,
      comments: 7
    },
    {
      id: '3',
      petName: 'Max',
      petAvatar: '🐕',
      timestamp: '昨天',
      title: '雨天的小委屈',
      story: '今天下雨不能出去散步，Max在门口坐了好久，时不时回头看我，眼神里写满了"为什么不带我出去玩"的委屈...',
      photo: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=300',
      likes: 25,
      comments: 12
    }
  ]);

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
          <YStack>
            <H1 fontSize="$8" color="$color">PawPal</H1>
            <Text fontSize="$4" color="$gray10">记录毛孩子的美好时光 🐾</Text>
          </YStack>
          
          <Button
            size="$4"
            icon={Camera}
            theme="blue"
            circular
            onPress={() => {
              // @ts-ignore
              navigation.navigate('CreateMoment');
            }}
          >
          </Button>
        </XStack>

        {/* Pet Moments Feed */}
        <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <YStack space="$3" padding="$4">
            {petMoments.map((moment) => (
              <Card
                key={moment.id}
                elevate
                size="$4"
                bordered
                animation="bouncy"
                scale={0.98}
                hoverStyle={{ scale: 1 }}
                pressStyle={{ scale: 0.96 }}
              >
                {/* Moment Header */}
                <Card.Header paddingBottom="$2">
                  <XStack space="$3" alignItems="center">
                    <Avatar circular size="$6">
                      <Avatar.Image src="" />
                      <Avatar.Fallback backgroundColor="$blue4">
                        <Text fontSize="$6">{moment.petAvatar}</Text>
                      </Avatar.Fallback>
                    </Avatar>
                    
                    <YStack flex={1}>
                      <H4 fontSize="$5">{moment.petName}</H4>
                      <Text fontSize="$3" color="$gray10">{moment.timestamp}</Text>
                    </YStack>
                  </XStack>
                </Card.Header>

                {/* Moment Content */}
                <YStack space="$3" paddingHorizontal="$4">
                  <H4 fontSize="$4" fontWeight="600">{moment.title}</H4>
                  <Text fontSize="$4" lineHeight="$2" color="$gray12">
                    {moment.story}
                  </Text>
                  
                  {moment.photo && (
                    <YStack>
                      <Image
                        source={{ uri: moment.photo }}
                        width="100%"
                        height={200}
                        borderRadius="$4"
                        resizeMode="cover"
                      />
                    </YStack>
                  )}
                </YStack>

                {/* Moment Actions */}
                <Card.Footer paddingTop="$3">
                  <XStack justifyContent="space-between" alignItems="center">
                    <XStack space="$4" alignItems="center">
                      <XStack space="$1" alignItems="center">
                        <Button
                          size="$3"
                          variant="ghost"
                          icon={Heart}
                          color="$red10"
                        />
                        <Text fontSize="$3" color="$gray10">{moment.likes}</Text>
                      </XStack>
                      
                      <XStack space="$1" alignItems="center">
                        <Button
                          size="$3"
                          variant="ghost"
                          icon={MessageCircle}
                          color="$blue10"
                        />
                        <Text fontSize="$3" color="$gray10">{moment.comments}</Text>
                      </XStack>
                    </XStack>
                    
                    <Button
                      size="$3"
                      variant="ghost"
                      icon={Share2}
                      color="$gray10"
                    />
                  </XStack>
                </Card.Footer>
              </Card>
            ))}
          </YStack>
        </ScrollView>

        {/* Floating Action Button */}
        <YStack position="absolute" bottom="$4" right="$4">
          <Button
            size="$6"
            icon={Plus}
            theme="blue"
            circular
            elevate
            onPress={() => {
              // @ts-ignore
              navigation.navigate('CreateMoment');
            }}
          >
          </Button>
        </YStack>
      </YStack>
    </SafeAreaView>
  );
}