// __mocks__/electron.js

module.exports = {
    ipcRenderer: {
      send: jest.fn(),
      on: jest.fn(),
      once: jest.fn(),
      removeAllListeners: jest.fn(),
    },
    remote: {
      app: {
        getPath: jest.fn(),
        // Add more methods as needed
      },
      // Mock other modules as necessary
    },
    // Continue mocking other required Electron APIs
  };
  