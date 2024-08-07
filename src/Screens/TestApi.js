import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator } from "react-native";
import axios from "axios";
import qs from "qs";

const TestApi = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let datas = qs.stringify({
          machineQR: "SEPARATOR S.7",
        });

        let config = {
          method: "post",
          maxBodyLength: Infinity,
          url: "http://10.99.100.105/demo/ServiceDemo.asmx/GetFormMachine",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          data: datas,
        };

        const response = await axios.post(config);

        // จัดการกับข้อมูลที่ได้รับ
        setData(response.data);
      } catch (err) {
        // จัดการกับข้อผิดพลาด
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  return (
    <View>
      <Text>Data received:</Text>
      <Text>{JSON.stringify(data, null, 2)}</Text>
    </View>
  );
};

export default TestApi;
