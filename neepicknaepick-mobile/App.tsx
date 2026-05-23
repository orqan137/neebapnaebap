import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BattleCategoryChips } from './src/features/battles/BattleCategoryChips';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#0f1020' }}>
        <View style={{ padding: 24, gap: 18 }}>
          <Text style={{ fontSize: 34, fontWeight: '900', color: '#ffffff' }}>니픽내픽</Text>
          <Text style={{ fontSize: 17, color: '#c9c9d8', lineHeight: 24 }}>
            친구의 픽과 내 픽을 나란히 놓고 고르거나, 커뮤니티에 물어보는 소셜 픽 배틀.
          </Text>
          <BattleCategoryChips />
          <View style={{ backgroundColor: '#ffffff', borderRadius: 28, padding: 18, gap: 12 }}>
            <Text style={{ color: '#6d5dfc', fontWeight: '900' }}>MAIN SCREEN</Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#151527' }}>내 픽 vs 네 픽</Text>
            <Text style={{ color: '#626277' }}>스니커즈, 카페, 선물, 영화, 점심까지 무엇이든 비교하고 투표받기.</Text>
          </View>
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
