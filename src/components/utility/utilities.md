# Utility Components Usage Guide

This guide outlines the available utility components within the project, their use cases, and example implementations. Each component is designed to enhance your application's functionality and user experience.

## Accessibility

### A11ySkipLink.js
Provides a method for keyboard users to skip directly to the main content.
```jsx
<A11ySkipLink contentId="mainContent" />
```

### AccessibilityFeatures.js
Manages global accessibility features such as theme or text size.
```jsx
<AccessibilityProvider>
  <YourApp />
</AccessibilityProvider>
```

### KeyboardNavigationHelper.js
Enhances keyboard navigation for custom components.
```jsx
<KeyboardNavigationHelper targetSelector=".custom-btn" focusClass="keyboard-focused" />
```

## Dialogs

### ConfirmationDialog.js
Displays a modal dialog to confirm user actions.
```jsx
<ConfirmationDialog isOpen={showDialog} onClose={handleClose} onConfirm={handleConfirm} title="Confirm Action" message="Are you sure?" />
```

### CustomAlert.js
Shows customizable alert messages with an overlay.
```jsx
<CustomAlert isVisible={showAlert} onClose={handleClose} title="Alert" message="This is an alert message." />
```

### Modal.js
Renders a modal for content or forms.
```jsx
<Modal isOpen={showModal} onClose={handleClose}>
  <p>This is a modal</p>
</Modal>
```

## Display

### Avatar.js
Displays an avatar image or a dynamically generated pixel-art placeholder.
```jsx
<Avatar src="path/to/image.jpg" alt="User Avatar" />
```

### Carousel.js
A component for cycling through items like images in a slideshow.
```jsx
<Carousel items={[<img src="image1.jpg" />, <img src="image2.jpg" />]} />
```

### ResponsiveImage.js
Ensures images are responsive and optimized for the device.
```jsx
<ResponsiveImage src="image_base" alt="Responsive image" sizes={{320: '320w', 768: '768w'}} />
```

## ErrorHandling

### ErrorBoundary.js
Catches JavaScript errors anywhere in the component tree.
```jsx
<ErrorBoundary>
  <ComponentThatMayError />
</ErrorBoundary>
```

### ErrorNotification.js
Displays error notifications to the user.
```jsx
<ErrorNotification message="An unexpected error occurred." />
```

## Feedback

### LoadingSpinner.js
Indicates that a page or section is loading.
```jsx
<LoadingSpinner />
```

### Snackbar.js
Shows a brief message at the bottom of the screen.
```jsx
<Snackbar message="Message sent successfully." duration={3000} />
```

### ToastNotification.js
Displays a transient message about app processes.
```jsx
<ToastNotification message="Item added to cart." />
```

## Forms

### AutoCompleteInput.js
Provides suggestions as the user types.
```jsx
<AutoCompleteInput suggestions={['Apple', 'Banana']} placeholder="Type here" />
```

### FormValidation.js
Facilitates real-time form validation.
```jsx
<FormValidation initialState={{ email: '' }} validate={validateForm}>
  {({ state, handleChange, errors }) => (
    <form>
      <input name="email" onChange={handleChange} />
      {errors.email && <p>{errors.email}</p>}
    </form>
  )}
</FormValidation>
```

### ToggleSwitch.js
A switch for toggling a setting on or off.
```jsx
<ToggleSwitch isChecked={isToggled} onChange={handleToggle} />
```

### VisibilityToggle.js
Toggles the visibility of its children.
```jsx
<VisibilityToggle isVisible={isVisible}>
  <p>Secret content</p>
</VisibilityToggle>
```

## Information

### InfoBanner.js
Displays an informational banner with a message.
```jsx
<InfoBanner message="This is an important update!" />
```

### Popover.js
Shows floating content like tooltips or additional information.
```jsx
<Popover triggerContent={<button>Hover me</button>} popoverContent={<p>More info here</p>} />
```

### ToolTip.js
Displays a tooltip on hover or focus.
```jsx
<ToolTip content="Tooltip text">
  <button>Hover over me</button>
</ToolTip>
```

## Interactions

### DragAndDrop.js
Enables drag-and-drop functionality for elements.
```jsx
<DragAndDrop onDrop={handleDrop}>
  <div>Drag files here</div>
</DragAndDrop>
```

### LongPressButton.js
Detects a long press on a button.
```jsx
<LongPressButton onLongPress={handleLongPress}>
  Long Press Me
</Long

PressButton>
```

### SwipeGestureHandler.js
Handles swipe gestures for navigation or actions.
```jsx
<SwipeGestureHandler onSwipeLeft={handleSwipeLeft} onSwipeRight={handleSwipeRight}>
  Swipe here
</SwipeGestureHandler>
```

## Layout

### FlexContainer.js
Creates a flexbox layout container.
```jsx
<FlexContainer columns="md:grid-cols-3" gap="gap-4">
  <div>Item 1</div>
  <div>Item 2</div>
</FlexContainer>
```

### GridSystem.js
Implements a responsive grid layout.
```jsx
<GridSystem columns="grid-cols-3" gap="gap-4">
  <div>Column 1</div>
  <div>Column 2</div>
</GridSystem>
```

### VisibilityController.js
Conditionally renders content based on visibility criteria.
```jsx
<VisibilityController isVisible={true}>
  <div>Visible Content</div>
</VisibilityController>
```

## Navigation

### GoBackIcon.js
A button that navigates the user to the previous page.
```jsx
<GoBackIcon />
```

### GoHomeIcon.js
Navigates the user back to the home page.
```jsx
<GoHomeIcon />
```
