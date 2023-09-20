import React, { useState } from 'react';

import { Form, Input, Button, Select, Checkbox, Space } from 'antd';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import stylesheet from '../Assets/Styles/SurveyForm.module.scss';

const { Option } = Select;

const SurveyForm: React.FC = () => {
    const [form] = Form.useForm();
    const [options, setOptions] = useState<string[]>([]);
    const [selectedOption, setSelectedOption] = useState<string>('');

    const handleAddOption = () => {
    setOptions([...options, '']);
    };

    const handleRemoveOption = (index: number) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
    };

    const handleOptionChange = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
    };

    const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const newOptions = [...options];
    const [removed] = newOptions.splice(result.source.index, 1);
    newOptions.splice(result.destination.index, 0, removed);

    setOptions(newOptions);
    };

    const handleSubmit = (values: any) => {
    console.log(values);
    };

    return (
    <div className={stylesheet.wrapper}>
        <Form form={form} onFinish={handleSubmit}>
        <Form.Item label="Название опроса" name="surveyName">
            <Input />
        </Form.Item>
        <Form.Item label="Описание" name="description">
            <Input.TextArea rows={1} />
        </Form.Item>
        <Form.Item label="Варианты ответов">
            <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="options">
                {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps}>
                    {options.map((option, index) => (
                    <Draggable key={index} draggableId={`option-${index}`} index={index}>
                        {(provided) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                        >
                            <Space>
                            <Form.Item
                                name={`option-${index}`}
                                rules={[{ required: true, message: 'Введите вариант ответа' }]}
                            >
                                <Input
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                />
                            </Form.Item>
                            <Button type="dashed" onClick={() => handleRemoveOption(index)} style={{ marginTop: 0 }}>
                                Удалить
                            </Button>
                            </Space>
                        </div>
                        )}
                    </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
            </DragDropContext>
            <Button type="dashed" onClick={handleAddOption} style={{ marginTop: 0 }}>
            Добавить вариант
            </Button>
        </Form.Item>
        <Form.Item label="Выпадающее меню" name="dropdown">
            <Select>
            {options.map((option, index) => (
                <Option key={index} value={option}>
                {option}
                </Option>
            ))}
            </Select>
        </Form.Item>
        <Form.Item label="" name="checkbox" valuePropName="checked">
            <Checkbox /> Повторяющийся опрос
        </Form.Item>
        <Space>
            <Button type="primary" htmlType="submit">Сохранить</Button>
            <Button type="danger">Удалить</Button>
        </Space>
        </Form>
    </div>
    );
};

export default SurveyForm;