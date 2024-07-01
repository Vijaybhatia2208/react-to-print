Create clean pdf using react-to-print npm package 
To generate a PDF from a React component using the react-to-print npm package, you'll need to set up a few things. Below is a detailed guide on how to do this, including setting up your project, installing the necessary packages, and writing the code for the functional React component. By following these steps, you can create professional and clean PDFs directly from your React application without worrying about alignment issues that often plague other methods like jsPDF and html2canvas.

1. Creating React app
2. Installing neccessary npm packages 
  npm install react-icons react-to-print

3. Folder Structure
5. Your index.js will look like this.
6. We define the styles in index.css to ensure the printed content looks good and we ensure the printed output looks professional and control the exact size and format of the generated PDF. Here @page css we are adjusting height and width of the pdf generated .

/* index.css */

7. This section of the code in App.js focuses on two things:
Resume Template: It defines the structure and layout of your resume content.
PDF Generation: It uses the useReactToPrint hook from the react-to-print library to create a PDF document from the resume template. The generatePDF function handles this process and utilizes a reference (contentToPrint) created with the useRef hook to capture the resume content.

//App.js

export default App;
8. The styles specific to the App.js component are defined in the App.css file.
/* App.css */

9. After finalizing the code setup, navigate to the VS Code terminal and run this commands :

cd react-to-print
npm start

10. Once you run the command, open your web browser and visit http://localhost:3000 to see your application.
11. When you click on the print button you will get preview of pdf and you can there click on save button to save pdf in your local storage.

In this guide, we've walked through the process of generating a PDF from a React component using the react-to-print npm package.
Using react-to-print offers several advantages:
1. Simplicity: The setup is straightforward and leverages React's component-based architecture.
2. Accuracy: It renders the PDF exactly as it appears in your browser, ensuring consistent styling and layout.
3. Customization: You have full control over the CSS, making it easy to design and tweak the appearance of your printable content.

Whether you're creating resumes, invoices, reports, or any other printable documents, react-to-print provides a reliable and efficient solution. Give it a try in your next project and enjoy the seamless experience of generating high-quality PDFs directly from your React application.
Feel free to explore the react-to-print documentation for more advanced features and customization options.

Happy coding!