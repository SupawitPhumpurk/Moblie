import React, { useState } from 'react'; // เติม React ป้องกัน Error
import { View, Text, TextInput, FlatList, TouchableOpacity, StyleSheet } from 'react-native';

// ========== ใบงาน ข้อ 5: Todo List (array) ==========
const Ex5Screen = ({ navigation }) => {
  // ===== STATE =====
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  // (3) addTodo
  const addTodo = () => {
    if (text.trim() === '') return;
    
    const newItem = {
      id: Date.now().toString(),
      title: text,
      done: false
    };

    setTodos([...todos, newItem]);
    setText('');
  };

  // (4) removeTodo(id)
  const removeTodo = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };

  // (5) toggleDone(id)
  const toggleDone = (id) => {
    setTodos(
      todos.map((item) => 
        item.id === id ? { ...item, done: !item.done } : item
      )
    );
  };

  const totalItems = todos.length;
  const completedItems = todos.filter(item => item.done).length;

  return (
    <View style={s.container}>
      <View style={s.inputRow}>
        <TextInput
          style={s.input}
          placeholder="เพิ่มงานที่ต้องทำ..."
          placeholderTextColor="#6e7681"
          value={text}
          onChangeText={(val) => setText(val)}
          onSubmitEditing={addTodo}
        />
        <TouchableOpacity style={s.addBtn} onPress={addTodo}>
          <Text style={s.addBtnText}>เพิ่ม</Text>
        </TouchableOpacity>
      </View>

      <Text style={s.counter}>
        ทั้งหมด {totalItems} รายการ เสร็จแล้ว {completedItems} รายการ
      </Text>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={s.item}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => toggleDone(item.id)}>
              <Text style={[s.itemText, item.done && s.itemDone]}>
                {item.done ? '✓' : '○'} {item.title}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeTodo(item.id)} hitSlop={10}>
              <Text style={s.delete}>ลบ</Text>
            </TouchableOpacity>
          </View>
        )}
        ListEmptyComponent={<Text style={s.empty}>− ยังไม่มีรายการ ลองเพิ่มดูสิ</Text>}
        
        // ----------------- ส่วนที่เพิ่มปุ่มไปยัง Ex6 -----------------
        // ใช้ ListFooterComponent เพื่อให้ปุ่มต่อท้ายรายการ FlatList เสมอ
        ListFooterComponent={
          <TouchableOpacity
            style={[s.btn, s.ghost, { marginTop: 16 }]}
            onPress={() => navigation.navigate('Ex6')}
          >
            <Text style={s.btnTextGhost}>ไปยัง Ex6</Text>
          </TouchableOpacity>
        }
        // --------------------------------------------------------
      />
    </View>
  );
}

// ===== STYLE =====
const s = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20 
  },
  inputRow: { 
    flexDirection: 'row', 
    gap: 8, 
    marginBottom: 12 
  },
  input: { 
    flex: 1, 
    borderWidth: 1, 
    borderColor: '#30363d', 
    backgroundColor: '#161b22', 
    color: '#c9d1d9', 
    padding: 12, 
    borderRadius: 10, 
    fontSize: 16 
  },
  addBtn: { 
    backgroundColor: '#238636', 
    paddingHorizontal: 20, 
    justifyContent: 'center', 
    borderRadius: 10 
  },
  addBtnText: { 
    color: '#ffffff', 
    fontWeight: '700', 
    fontSize: 16 
  },
  counter: { 
    color: '#8b949e', 
    fontSize: 13, 
    marginBottom: 10 
  },
  item: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    backgroundColor: '#161b22', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    borderRadius: 10, 
    padding: 14, 
    marginBottom: 8 
  },
  itemText: { 
    color: '#c9d1d9', 
    fontSize: 16 
  },
  itemDone: { 
    color: '#6e7681', 
    textDecorationLine: 'line-through' 
  },
  delete: { 
    color: '#f85149', 
    fontWeight: '600', 
    fontSize: 14, 
    marginLeft: 12 
  },
  empty: { 
    color: '#6e7681', 
    textAlign: 'center', 
    marginTop: 20, 
    fontSize: 15 
  },
  btn: { 
    backgroundColor: '#21262d', 
    borderWidth: 1, 
    borderColor: '#30363d', 
    paddingVertical: 12, 
    paddingHorizontal: 24, 
    borderRadius: 10, 
    alignItems: 'center',
    justifyContent: 'center'
  },
  ghost: { 
    backgroundColor: 'transparent' 
  },
  btnTextGhost: { 
    color: '#8b949e', 
    fontSize: 16, 
    fontWeight: '600' 
  },
});

export default Ex5Screen;