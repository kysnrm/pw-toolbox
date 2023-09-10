import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Common/Button",
  component: Button,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { label: "ログイン" },
};
