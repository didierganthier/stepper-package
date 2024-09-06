import React from "react";
import PropTypes from "prop-types";
import { TiTick } from "react-icons/ti";
import "../dist/tailwind.css"; // Import Tailwind CSS

interface StepperProps {
    steps: string[];
    currentStep: number;
    onStepChange: (step: number) => void;
}

const Stepper: React.FC<StepperProps> = ({ steps, currentStep, onStepChange }) => {
    return (
        <div className="flex items-center justify-between pb-6">
            {steps.map((step, index) => (
                <div
                    key={index}
                    className={`cursor-pointer text-center ${
                        index <= currentStep ? "text-[#f87171]" : "text-[#94a3b8]"
                    }`}
                    onClick={() => onStepChange(index)}
                >
                    <div
                        className={`w-8 h-8 rounded-[99px] border ${
                            index <= currentStep ? "bg-[#ef4444] text-[#fff]" : "border-[#d6d3d1]"
                        } flex items-center justify-center`}
                    >
                        {index + 1}
                    </div>
                    <span className="mt-2 block">{step}</span>
                </div>
            ))}
        </div>
    );
};

Stepper.propTypes = {
    steps: PropTypes.arrayOf<any>(PropTypes.string).isRequired,
    currentStep: PropTypes.number.isRequired,
    onStepChange: PropTypes.func.isRequired,
};

export default Stepper;
