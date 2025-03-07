# Themed React Components using Abstract Factory Pattern

This project demonstrates how to create themed React components using the Abstract Factory Pattern. The Abstract Factory Pattern is a creational design pattern that provides an interface for creating families of related or dependent objects without specifying their concrete classes.

![image](https://github.com/user-attachments/assets/ce0648bc-b329-42da-82be-1a35e2914b6c)

## Demo

View a live demo of the project [here](https://m-housni.github.io/themed-react-components-using-abstract-factory-pattern/).

### **Explanation**
- **Abstract Factory (`ButtonFactory`)** defines a contract for creating button variations.
- **Concrete Factories (`LightThemeFactory`, `DarkThemeFactory`)** provide specific button implementations.
- **Context (`ThemeContext`)** dynamically switches factories based on the selected theme.
- **Reusable Component (`ThemedButton`)** calls the factory to create buttons dynamically.

### **Benefits**
✅ Ensures scalability by allowing easy addition of new themes or variations.  
✅ Decouples UI components from their specific implementations.  
✅ Enhances reusability and maintainability in large applications.

## Installation

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/themed-react-components-using-abstract-factory-pattern.git
cd themed-react-components-using-abstract-factory-pattern
npm install
```

## Usage

To run the application, use the following command:

```bash
npm run dev
```

This will start the development server and open the application in your default web browser.
