# Stepper Component

A customizable Stepper component built with React and styled using Tailwind CSS.

## Table of Contents

- Installation
- Usage
- Props
- Contributing
- License

## Installation

To install the package, run:

```bash
npm install your-package-name
```

## Usage

Here’s an example of how to use the Stepper component in your project:

```jsx
import React, { useState } from "react";
import Stepper from "your-package-name";

const App = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const steps = ["Step 1", "Step 2", "Step 3"];

  return (
    <div>
      <Stepper
        steps={steps}
        currentStep={currentStep}
        onStepChange={setCurrentStep}
      />
    </div>
  );
};

export default App;
```

## Props

The Stepper component accepts the following props:

- `steps`: An array of strings representing the steps in the stepper.
- `currentStep`: The index of the current step.
- `onStepChange`: A function that is called when the step changes.
  
## Contributing

Contributions are welcome! Please feel free to submit a PR if you have any improvements or bug fixes.

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes.
4. Commit your changes (git commit -m 'Add some feature').
5. Push to the branch (git push origin feature-branch).
6. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

