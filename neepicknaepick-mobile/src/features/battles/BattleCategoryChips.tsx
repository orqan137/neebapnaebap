import React from 'react';
import { Text, View } from 'react-native';

const categories = ['맛', '가성비', '다이어트'];

export function BattleCategoryChips() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {categories.map((category) => (
        <Text key={category} style={{ backgroundColor: '#2f2a24', color: 'white', padding: 10, borderRadius: 999, fontWeight: '800' }}>
          {category}
        </Text>
      ))}
    </View>
  );
}
