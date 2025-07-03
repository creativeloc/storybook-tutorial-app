import { ButtonCounter } from "./ButtonCounter"

export default {
  title: "Counter/ButtonCounter",
  component: ButtonCounter,
  tags: ["autodocs"],
  argTypes: {
    backgroundColor: {
      control: "color",
      description:
        "Please change the background color within the blue spectrum",
      table: {
        defaultValue: { summary: "#c4fff3" }
      }
    },
    label: {
      control: "text",
      table: { defaultValue: { summary: "Click Me" } },
      description: "Other options include: Press Enter, Enter, Go!"
    }
  }
}

// a story where the button size is large
export const Large = {
  args: {
    size: "large",
    label: "Click Me",
    backgroundColor: "#c4fff3"
  },
  parameters: {
    docs: {
      description: {
        story: "This is the large button view"
      }
    }
  }
}

export const Small = {
  args: {
    size: "small",
    label: "Click Me",
    backgroundColor: "#c4fff3"
  },
  parameters: {
    docs: {
      description: {
        story: "This is the small button view"
      }
    }
  }
}
