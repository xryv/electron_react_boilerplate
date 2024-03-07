// SomeComponent.test.js

it('should send an IPC message on button click', () => {
    const { getByText } = render(<YourComponent />);
    fireEvent.click(getByText('Send Message'));
    expect(electron.ipcRenderer.send).toHaveBeenCalledWith('your-message', expect.anything());
  });
  