import type { Meta, StoryObj } from "@storybook/react";
import { Card, CardProps } from "./Card";

const meta = {
  title: "Example/Card",
  component: Card,
  tags: ["docsPage"],
  argTypes: {
    title: {
      control: { type: "text" },
    },
    imgUrl: {
      control: { type: "text" },
    },
  },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: "Card Title",
    imgUrl: "https://plus.unsplash.com/premium_photo-1731021470631-255095ce4045?q=80&w=1987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
};