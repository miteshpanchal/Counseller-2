import React from 'react'
import { ScrollView, View } from 'react-native';

import InfoCard from '../components/InfoCard';
export default function Dashboard({ navigation }) {
  return (
    <ScrollView >
      <InfoCard title="National Pension Scheme" subtitle="secure your futur retirement with nps" content="everybody is eligible for this scheme"></InfoCard>
    </ScrollView>
  )
}

