import React, {useState} from "react";
import {
    View,
    TextInput,
    Button,
    StyleSheet,
} from "react-native";

type toDoFormProps = {
    addTask: (task: string) => void;
}

function ToDoForm({addTask} : toDoFormProps) {
    const [taskText, setTaskText] = useState(''); 
    return(
        <View style={styles.form}>
            <TextInput
                style={styles.input}
                placeholder="Task Name"
                onChangeText={(text) => setTaskText(text)}
                value={taskText}
            />
            <Button title="Add Task"
            onPress={() => {
                if (taskText) {
                    addTask(taskText);
                    setTaskText('');
                }
            }} />
        </View>
    )
}

const styles = StyleSheet.create({
    form: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#000',
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 10,
    }
});

export default ToDoForm;