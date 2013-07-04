self.addEventListener('message', function(e) {
  var data = e.data;
  switch (data.cmd) {
    case 'start':
    self.postMessage('WORKER STARTED: ' + data.msg);
    break;
    case 'stop':
    self.postMessage('WORKER STOPPED: ' + data.msg +
     '. (buttons will no longer work)');
      // Terminates the worker.
      self.close();
      break;
      default:
      self.postMessage('Unknown command: ' + data.msg);
    };
  }, false);