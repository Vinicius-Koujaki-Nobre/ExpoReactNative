"use client"

import { StyleSheet, Text, View, FlatList } from 'react-native';
import { api } from "@/constants/api"
import { useEffect, useState } from 'react';
import { Item } from '@/components/item';

interface IData {
  name: string
  image: string
}

export default function HomeScreen() {

  const [data, setData] = useState<IData[]>([])

    useEffect(() => {
        api.get(`/character`).then((res : any) => {
            console.log(res.data.results)
            setData(res.data.results)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

  return (
    <>
      <Text style={styles.head}>API</Text>
      
        {data.map((item, index) => (
          <View style={styles.page} key={index}>
            <Text>{item.name}</Text>
            <FlatList
            style={styles.card}
              data={data}
              renderItem={({ item }) => (
              <Item image={item.image} name={item.name}/>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        ))}
    </>
  );
}

const styles = StyleSheet.create({
  head: {
    backgroundColor: '#696969',
    textAlign: 'center',
    padding: 20
  },
  page: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    
  },
  card: {
    flex: 1
  }
});
