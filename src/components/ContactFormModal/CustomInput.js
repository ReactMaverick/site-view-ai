import { commonColor } from "@/values/Colors/CommonColor";
import styles from "./CustomInput.module.css";
import { useEffect, useRef, useState } from "react";
import $ from 'jquery';

export default function CustomInput({
    label = "Custom Label",
    placeholder = "Custom Placeholder",
    value = "",
    onTextChange,
    type = "text",
    multiline = false,
    required = false,
    disabled = false,
    error = false,
    helperText = "",
    inputType = "input",
    options = [
        { label: "Option 1", value: "option1" },
        { label: "Option 2", value: "option2" },
        { label: "Option 3", value: "option3" },
        { label: "Option 4", value: "option4" },
        { label: "Option 5", value: "option5" },
        { label: "Option 6", value: "option6" },
        { label: "Option 7", value: "option7" },
        { label: "Option 8", value: "option8" },
        { label: "Option 9", value: "option9" },
        { label: "Option 10", value: "option10" },
    ],
    leftBox = true,
    leftBoxText = "91",
}) {

    const selectSearchRef = useRef(null);

    const [inputValue, setInputValue] = useState(value);
    const [isSelectOpen, setIsSelectOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const onChange = (e) => {
        setInputValue(e.target.value);
        onTextChange && onTextChange(e.target.value);
    }

    const handleSelectOption = ({ label, value }) => {
        setSelectedOption({ label, value });
        setIsSelectOpen(false);

        setSearchTerm('');
        
        onTextChange && onTextChange({ label, value });
    }


    useEffect(() => {
        // Close select on outside click
        $(document).on('click', function (e) {
            if (!$(e.target).closest(`.${styles.selectContainer}`).length) {
                setIsSelectOpen(false);
                setSearchTerm('');
            }
        });
    }, []);

    useEffect(() => {
        if (inputType === 'select' && isSelectOpen) {
            selectSearchRef.current.focus();
        }
    }, [isSelectOpen]);

    return (
        <div
            className={styles.container}

        >
            <div
                className={styles.inputContainer}
            >
                <div
                    className={styles.labelView}
                >
                    <label
                        className={styles.labelText}
                    >
                        {label}
                    </label>
                </div>
                {inputType === 'input' && (multiline ? (
                    <textarea
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={onChange}
                        disabled={disabled}
                        required={required}
                        rows={4}
                    />
                ) : (
                    <input
                        type={type}
                        placeholder={placeholder}
                        value={inputValue}
                        onChange={onChange}
                        disabled={disabled}
                        required={required}
                    />
                ))}
                {inputType === 'select' && (
                    <div className={styles.selectContainer}>
                        <div
                            className={`${styles.customSelect + (!selectedOption ? ` ${styles.placeholder}` : '')}`}
                            onClick={() => {
                                setIsSelectOpen(!isSelectOpen);
                                setSearchTerm('');
                            }}
                        >
                            {selectedOption?.label || placeholder}
                        </div>
                        {isSelectOpen && (
                            <div className={styles.selectOptionsOuter}>
                                <input
                                    type="text"
                                    className={styles.searchInput}
                                    placeholder="Search..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    ref={selectSearchRef}
                                />
                                <div className={styles.selectOptions}>
                                    {filteredOptions.map(({ label, value }, index) => (
                                        <div
                                            key={index}
                                            className={styles.selectOption}
                                            onClick={() => {
                                                handleSelectOption({ label, value });
                                            }}
                                        >
                                            {label}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                )}
                {error && (
                    <div
                        className={styles.errorView}
                    >
                        <span
                            className={styles.errorText}
                        >
                            {helperText}
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
}