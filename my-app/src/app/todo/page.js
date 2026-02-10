'use client';
import {
  TodoWrapper,
  TodoBox,
  Title,
  Input,
  Filter,
  List,
  Footer,
  RemainText,
} from "./styles";
  
export default function todoList() { 
  return (
    <>
      <TodoWrapper>
        <TodoBox>
          <Title>Todo List</Title>
          {/* 입력필드 */}
          <Input.Row>
            <Input.Field placeholder="Add a new task..." />
            <Input.Button>Add</Input.Button>
          </Input.Row>
          {/* 검색필드 */}
          <Filter.Row>
            <Filter.Button active>All</Filter.Button>
            <Filter.Button>Active</Filter.Button>
            <Filter.Button>Completed</Filter.Button>
          </Filter.Row>
          {/* 리스트필드 */}
          <List.Row>
            <List.Item>
              <List.Checkbox type="checkbox" />
              <List.Text completed>Task 1</List.Text>
              <List.DeleteButton>Delete</List.DeleteButton>
            </List.Item>
            <List.Item>
              <List.Checkbox type="checkbox" />
              <List.Text>Task 1</List.Text>
              <List.DeleteButton>Delete</List.DeleteButton>
            </List.Item>
          </List.Row>
          {/* 하단 */}
          <Footer>
            <RemainText>2 tasks remaining...</RemainText>
          </Footer>
        </TodoBox>
      </TodoWrapper>
    </>
  );
};