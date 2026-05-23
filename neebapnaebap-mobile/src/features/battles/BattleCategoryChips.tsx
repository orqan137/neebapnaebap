import React from 'react';
import { Text, View } from 'react-native';

const categories = ['맛있어 보임', '가성비', '건강밥'];

export function BattleCategoryChips() {
  return (
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 8 }}>
      {categories.map((category) => (
        <Text key={category} style={{ backgroundColor: '#111827', color: 'white', padding: 10, borderRadius: 999, fontWeight: '700' }}>
          {category}
        </Text>
      ))}
    </View>
  );
}
