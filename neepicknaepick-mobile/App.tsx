import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BattleCategoryChips } from './src/features/battles/BattleCategoryChips';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f5f1ea' }}>
        <View style={{ padding: 24, gap: 18 }}>
          <Text style={{ fontSize: 34, fontWeight: '900', color: '#2a241f' }}>니밥내밥</Text>
          <Text style={{ fontSize: 17, color: '#74685d', lineHeight: 24 }}>
            점심시간마다 같이하기로 한 친구들이 밥 사진을 올리고, 맛·가성비·다이어트 기준으로 오늘의 승자를 고르는 앱.
          </Text>
          <BattleCategoryChips />
          <View style={{ backgroundColor: '#ffffff', borderRadius: 28, padding: 18, gap: 12, borderWidth: 1, borderColor: '#eadfce' }}>
            <Text style={{ color: '#98734d', fontWeight: '900' }}>DAILY LUNCH BATTLE</Text>
            <Text style={{ fontSize: 24, fontWeight: '900', color: '#2a241f' }}>오늘 점심 승자는?</Text>
            <Text style={{ color: '#74685d' }}>친구끼리 먼저 고르고, 애매하면 커뮤니티가 승자를 정해줘요.</Text>
          </View>
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
