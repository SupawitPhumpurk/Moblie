import React, { useState } from 'react'; // นำเข้า React ป้องกัน Error
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 6: Functional Update ==========
const Ex6Screen = ({ navigation }) => {
  // ===== STATE =====
  const [count, setCount] = useState(0);

  // (2) addThreeWrong
  const addThreeWrong = () => {
    setCount(count + 1);
    setCount(count + 1);
    setCount(count + 1);
  };

  // (3) addThreeRight
  const addThreeRight = () => {
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
    setCount(prev => prev + 1);
  };

  return (
    <View style={s.container}>
      <Text style={s.number}>{count}</Text>
      
      <TouchableOpacity style={[s.btn, s.wrong]} onPress={addThreeWrong}>
        <Text style={s.btnText}>+3 แบบผิด (ได้แค่ +1)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[s.btn, s.right]} onPress={addThreeRight}>
        <Text style={s.btnText}>+3 แบบถูก (prev =&gt; prev + 1)</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={[s.btn, s.reset]} onPress={() => setCount(0)}>
        <Text style={s.btnTextGhost}>รีเซ็ต</Text>
      </TouchableOpacity>

      {/* ----------------- ปุ่มไปยัง Ex7 ที่เพิ่มเข้ามา ----------------- */}
      <TouchableOpacity 
        style={[s.btn, s.reset, { marginTop: 8 }]} 
        onPress={() => navigation.navigate('Ex7')}
      >
        <Text style={s.btnTextGhost}>ไปยัง Ex7</Text>
      </TouchableOpacity>
      {/* -------------------------------------------------------- */}
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    padding: 20, 
    alignItems: 'center', 
    gap: 12 
  },
  number: { 
    fontSize: 72, 
    fontWeight: '800', 
    color: '#61dafb', 
    marginVertical: 16 
  },
  btn: { 
    paddingVertical: 14, 
    borderRadius: 10, 
    alignItems: 'center', 
    width: '100%' 
  },
  wrong: { 
    backgroundColor: '#8b2c2c' 
  },
  right: { 
    backgroundColor: '#238636' 
  },
  reset: { 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    borderColor: '#30363d' 
  },
  btnText: { 
    color: '#ffffff', 
    fontSize: 16, 
    fontWeight: '600' 
  },
  btnTextGhost: { 
    color: '#8b949e', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});

export default Ex6Screen;