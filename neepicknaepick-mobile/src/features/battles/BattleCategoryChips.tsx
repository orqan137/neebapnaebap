import React from 'react';
import { Text, View } from 'react-native';

const categories = ['분위기', '실용성', '가성비', '친구 반응'];

export function BattleCategoryChips() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {categories.map((category) => (
        <Text key={category} style={{ backgroundColor: '#6d5dfc', color: 'white', padding: 10, borderRadius: 999, fontWeight: '800' }}>
          {category}
        </Text>
      ))}
    </View>
  );
}
