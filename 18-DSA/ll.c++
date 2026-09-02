#include <iostream>
#include <string>
#include <vector>
using namespace std;

class Node {
public:
  string value;
  Node *next;
  Node() { this->next = nullptr; }
  Node(string value) {
    this->value = value;
    this->next = nullptr;
  }
  Node(string value, Node *next) {
    this->value = value;
    this->next = next;
  }
};

class LinkedList {
public:
  Node *headNode;
  Node *tailNode;
  LinkedList() {
    this->headNode = nullptr;
    this->tailNode = nullptr;
  }

  LinkedList *append(string value) {

    Node *newNode = new Node(value);
    if (!this->headNode) {
      this->headNode = newNode;
      this->tailNode = newNode;
      return this;
    }
    this->tailNode->next = newNode;
    this->tailNode = newNode;
    return this;
  }

  LinkedList *prepend(string value) {
    Node *newNode = new Node(value, headNode);
    if (!this->headNode) {
      this->headNode = newNode;
      this->tailNode = newNode;
      return this;
    }
    this->headNode = newNode;
    return this;
  }

  int size() {
    int count = 0;
    Node *currentNode = this->headNode;
    while (currentNode) {
      count++;
      currentNode = currentNode->next;
    }
    return count;
  }

  string head() {
    if (this->headNode)
      return this->headNode->value;
    else
      return "undefined";
  }
  string tail() {
    if (this->tailNode)
      return this->tailNode->value;
    else
      return "undefined";
  }
  string at(int index) {
    if (index < 0)
      return "undefined";
    int i = 0;
    Node *currentNode = this->headNode;
    while (i < index && currentNode) {
      currentNode = currentNode->next;
      i++;
    }
    return currentNode ? currentNode->value : "undefined";
  }

  string pop() {
    if (!this->headNode)
      return "List is empty and there's Nothing to pop";
    Node *popped = this->headNode;
    this->headNode = this->headNode->next;
    if (!this->headNode)
      this->tailNode = nullptr;
    string popValue = popped->value;
    delete popped;
    return popValue;
  }

  bool contains(string value) {
    Node *currentNode = this->headNode;
    while (currentNode) {
      if (currentNode->value == value)
        return true;
      currentNode = currentNode->next;
    }
    return false;
  }
  int findIndexOf(string value) {
    Node *currentNode = this->headNode;
    int count = 0;
    while (currentNode) {
      if (currentNode->value == value)
        return count;
      currentNode = currentNode->next;
      count++;
    }
    return -1;
  }

  string toString() {
    Node *currentNode = this->headNode;
    string str = "";
    while (currentNode) {
      str += string("( ") + (currentNode->value) + " )" + " -> ";
      currentNode = currentNode->next;
    }
    return str + " null;\n";
  }
  LinkedList *insertAt(int index, vector<string> values) {
    if (index < 0 || index > this->size() || values.empty()) {
      return this;
    }
    if (index == 0) {
      for (int i = values.size() - 1; i >= 0; i--) {
        Node *newNode = new Node(values[i], this->headNode);
        if (!this->headNode) {
          this->tailNode = newNode;
        }
        this->headNode = newNode;
      }

      return this;
    }
    Node *previousNode = this->headNode;
    for (int i = 1; i < index; i++) {
      previousNode = previousNode->next;
    }
    Node *currentNode = previousNode->next;
    for (string i : values) {
      Node *newNode = new Node(i, currentNode);
      previousNode->next = newNode;
      previousNode = newNode;
    }
    if (!currentNode) {
      this->tailNode = previousNode;
    }
    return this;
  }

  LinkedList *removeAt(int index) {
    int listSize = this->size();
    if (index < 0 || index >= listSize) {
      cout << "Returning the original Linked list because index is out of "
              "bounds";
      return this;
    }
    Node *currentNode = this->headNode;
    if (index == 0) {
      this->headNode = this->headNode->next;
      if (!this->headNode) {
        this->tailNode = nullptr;
      }
      delete currentNode;
    } else if (index == listSize - 1) {
      for (int i = 1; i < index; i++) {
        currentNode = currentNode->next;
      }
      Node *toRemove = currentNode->next;
      currentNode->next = toRemove->next;
      this->tailNode = currentNode;
      delete toRemove;
    } else {
      for (int i = 1; i < index; i++) {
        currentNode = currentNode->next;
      }
      Node *toRemove = currentNode->next;
      currentNode->next = toRemove->next;
      delete toRemove;
    }
    return this;
  }
};

int main() {
  LinkedList *list = new LinkedList();
  list->append("dog");
  list->append("cat");
  list->append("parrot");
  list->append("hamster");
  list->append("snake");
  list->append("turtle");

  cout << list->toString();
  list->insertAt(3, {"Giraffee", "Zebra", "Penguin"});
  cout << list->toString();
}