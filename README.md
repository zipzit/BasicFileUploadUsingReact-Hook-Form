# BasicFileUploadUsingReact-Hook-Form
Created with CodeSandbox

# Simple Example
I'm trying to build a form, in which the user uploads a single image as well as traditional form text data.
I read with great interest the postings at https://github.com/react-hook-form/react-hook-form/issues/127
and https://github.com/react-hook-form/react-hook-form/issues/274 which briefly discuss this topic.

I noticed there does not appear to be a existing sample for a text and file form in the react-hook-form documentation. I was hoping I could develop something of use.

I understand from the React documentation that because <input type="file" /> generates a value that is read-only, it is an uncontrolled component in React, and that form data is handled by the DOM itself. The react folks recommend that instead of writing an event handler for each state, that one instead uses a ref to get from values from the DOM, reference:
See https://reactjs.org/docs/uncontrolled-components.html

For my proposal, I chose NOT to use onChange() (as recommended in issues 127, 274), but instead go with the React recommended `ref` technique. 

