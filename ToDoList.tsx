import React from "react";
import {
    ScrollView, 
    Pressable,
    View,
    Text,
    StyleSheet,
} from "react-native";

type toDoListProps = {
    toDoList: Array<string>;
}

function ToDoList({toDoList} : toDoListProps){
    return(
    <ScrollView>
        {toDoList.map((toDo, index) => (
            <Pressable key={index}>
                <View style={styles.task}>
                    <Text style={styles.taskText}>{toDo}</Text>
                </View>
            </Pressable>
        ))}
    </ScrollView>
    );
}

const styles = StyleSheet.create({
    task: {
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#000',
    },
    taskText: {
        fontSize: 20,
    },
});
export default ToDoList;