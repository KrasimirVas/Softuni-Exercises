function orderGuests(rooms, guestPairs) {
    for (let i = 0; i < rooms.length; i++) {
        rooms[i].guests = [];
    }

    let teaHouse = 0;

    while (guestPairs.length > 0) {
        let pair = guestPairs.shift();

        let isPairSettled = false;
        if (pair.first.gender === pair.second.gender) {
            let room = getAppropriateRoom(r => r.type === 'triple' && r.guests.length < 3 && (r.guests.length === 0 || r.guests[0].gender === pair.first.gender));
            if (room) {
                room.guests.push(pair.first);

                if (room.guests.length === 3) {
                    room = getAppropriateRoom(r => r.type === 'triple' && r.guests.length < 3 && (r.guests.length === 0 || r.guests[0].gender === pair.second.gender));
                    if (room) {
                        room.guests.push(pair.second);
                    } else {
                        teaHouse++;
                    }
                } else {
                    room.guests.push(pair.second);
                }

                isPairSettled = true;
            }
        } else {
            let room = getAppropriateRoom(r => r.type === 'double-bedded' && r.guests.length === 0);
            if (room) {
                room.guests = [pair.first, pair.second];
                isPairSettled = true;
            }
        }

        if (!isPairSettled) {
            teaHouse += 2;
        }
    }

    // Print Rooms
    let result = '';
    for (const r of rooms.sort((a, b) => a.number < b.number ? -1 : a.number > b.number ? 1 : 0)) {
        result += `Room number: ${r.number}\n`;

        for (const g of r.guests.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0)) {
            result += `--Guest Name: ${g.name}\n`;
            result += `--Guest Age: ${g.age}\n`;
        }

        let emptyBeds = r.type === 'triple'
            ? 3 - r.guests.length
            : 2 - r.guests.length;

        result += `Empty beds in the room: ${emptyBeds}\n`;
    }

    result += `Guests moved to the tea house: ${teaHouse}`;
    console.log(result);

    function getAppropriateRoom(func) {
        for (const r of rooms) {
            if (func(r)) {
                return r;
            }
        }

        return null;
    }
}

orderGuests(
    [{ number: '206', type: 'double-bedded' },
        { number: '311', type: 'triple' }],

    [{
        first: { name: 'Tanya Popova', gender: 'female', age: 24 },
        second: { name: 'Miglena Yovcheva', gender: 'female', age: 23 }
    },
        {
            first: { name: 'Katerina Stefanova', gender: 'female', age: 23 },
            second: { name: 'Angel Nachev', gender: 'male', age: 22 }
        },
        {
            first: { name: 'Tatyana Germanova', gender: 'female', age: 23 },
            second: { name: 'Boryana Baeva', gender: 'female', age: 22 }
        }]
);

