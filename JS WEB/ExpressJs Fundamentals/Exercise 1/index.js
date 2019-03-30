const storage = require('./storage');

storage.put('Koksal', 'First');
storage.put('Dinchar', 'Second');
storage.put('Mitio', 'Third');
storage.save();
storage.load();
storage.put('Kondio', 'Fourth');
storage.save();
storage.load();



