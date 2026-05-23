import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BattleCategoryChips } from './src/features/battles/BattleCategoryChips';

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#f7f1e8' }}>
        <View style={{ padding: 24, gap: 16 }}>
          <Text style={{ fontSize: 32, fontWeight: '800', color: '#1f130b' }}>니밥내밥</Text>
          <Text style={{ fontSize: 17, color: '#5b4636' }}>점심 사진을 올리고 친구끼리 다방면 승부!</Text>
          <BattleCategoryChips />
        </View>
      </SafeAreaView>
    </QueryClientProvider>
  );
}
