# Key Links
- [`App | Vault Maker`] https://nervous-shannon-c787e5.netlify.com/
- [`UI Component Library | Vault Maker UI`] https://github.com/BackToTheCode/package.vault-maker-ui
- [`Design System | Storybook`] https://adoring-leavitt-ad4453.netlify.com
- [`Wireframes | InvisionApp`] (https://projects.invisionapp.com/boards/FD3XNJ8SM8Q/)
- [`Kanban Board | Vault Maker`] (https://trello.com/b/H0NV22h9/mcd-vault-manager)

# Vault Maker

Vault Maker gives users the opportunity to set up and manage Vaults covering 
the range of collateral types currently approved by Maker voters.

**Note**: Collateralised Debt Position -> renamed to -> Vault.

## Why

To create a brutally simple tool for members of the MakerDAO community to use to 
create and maintain Vaults.

## Installation

Clone the repository with `git clone git@github.com:BackToTheCode/project.mcd-vault-manager.git`

Install dependencies with `yarn install`

## Run

Start the development server with `yarn dev`

## Test

Run the test suit with with `yarn test`

## Process

- Firstly, simple wireframes were drawn on paper to help the author understand the necessary flows. These are open to change as the project progresses [`Wireframes | InvisionApp`](https://projects.invisionapp.com/boards/FD3XNJ8SM8Q/)
- Secondly, a kanban board was prepared populated with all the necessary tickets [`Kanban Board | Vault Maker`] (https://trello.com/b/H0NV22h9/mcd-vault-manager)
- Thirdly, setup storybook to create a design-system for the tool [`Design System | Storybook`] (https://adoring-leavitt-ad4453.netlify.com)
- Finally, built out the tool itself using Next.JS / Dai.js and an array of other tools and libraries

## Structure

```
__mocks__/
└── globalComponentMock.js

__tests__/
└── integrationTests.js

pages/
└── completePages.js

components/
├── blocks/
│   ├── block/
│   │   ├── subComponent.js
│   │   └── subComponent.js
└── elements/
    └── component.js
```

- Global Mocks: Any shared mocks will be in here
- Integration Tests: All integration tests will be housed in this folder
- Components: Any component that is not a page can be found here. The folder is subdivided into atomic components (elements) and molecular components (blocks)

## Technology

### 💰Dai.js

Dai.js is a library - developed by the Maker Foundation team - to allow community member developers to quickly and simply build applications on top of MakerDAO's platform of smart contracts. 

### ⚛️  React / Next.js

Next.JS is the self described React Framework for production. It is more opinionated than the Facebook developed create-react-app bootstrapping library.
Next.JS also comes with some major performance optimizations and the ability to fully export the application as a static site. This static export 
capability is being leveraged in this project.

### 🆎 Typescript

Typescript brings a degree of type-safety to weakly typed javascripts. It adds some fairly significant overhead during setup and also development.

### 💅 Emotion Theming / ⚛️  Rebass

We're using the UI component library Rebass along with Emotion Theming. Rebass and Emotion Theming play well together with Emotion Theming easily overriding Rebass component styles.

We're also taking inspiration from BEM naming by creating blocks with parent components and child component naming.

Here's an example.

```
<Card>
  <Card.Header>
    <Card.Image
      alt=”bob-ross-headshot”
      src=”www.example.com/bob-ross.jpg”
    />
    <Card.Title>
      Bob Ross
    </Card.Title>
  </Card.Header>
  <Card.Text>
    Robert Norman Ross (October 29, 1942 – July 4, 1995) was an American painter,
    art instructor, and television host. He was the creator and host of
    The Joy of Painting, an instructional television program that aired from
    1983 to 1994 on PBS in the United States…
  </Card.Text>
</Card>

```

### 📚 Storybook

Storybook is a front-end tool that allows engineers to maintain a living record of all their applications components. All versions/states of each component are listed alongside one another.

## 📤 Deployment

Both the design system and the app itself are being deployed as static sites via Netlify.

- [`App | Vault Maker`] https://nervous-shannon-c787e5.netlify.com/
- [`Design System | Storybook`] https://adoring-leavitt-ad4453.netlify.com















