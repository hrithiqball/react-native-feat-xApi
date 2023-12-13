/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link, Stack } from 'expo-router';

import { Text, View } from '../components/Themed';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View className="flex-1 items-center justify-center p-5">
        <Text className="text-xl font-bold">This screen doesn't exist.</Text>

        <Link href="/" className="m-4 p-4">
          <Text className="text-sm text-blue-400">Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
