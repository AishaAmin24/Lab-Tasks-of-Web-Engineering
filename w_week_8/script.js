
const guests = [
    { name: 'Aisha', age: 25, rsvp: true },
    { name: 'Bushra', age: 30, rsvp: false },
    { name: 'hureeza', age: 28, rsvp: true }
];


function generateInvitations(guestList, ...additionalDetails) {
    return guestList.map(guest => {
        let invitation = `Dear ${guest.name},<br>`;
        invitation += `You are invited to our party.`;
        
        if (guest.rsvp) {
            invitation += `<br>Thank you for your time !`;
        } else {
            invitation += `<br>Please let us know if you can make it.`;
        }

        if (additionalDetails.length > 0) {
            invitation += `<br>Additional Details: ${additionalDetails.join(', ')}`;
        }

        invitation += `<br><br>Best regards,<br>Party Organizer`;
        return invitation;
    });
}

// Example usage
const additionalDetails = ["Dress Code: Casual", "Bring a friend"];
const invitationMessages = generateInvitations(guests, ...additionalDetails);

const invitationsDiv = document.getElementById('invitations');
invitationMessages.forEach(message => {
    const messageElement = document.createElement('div');
    messageElement.innerHTML = message;
    messageElement.style.marginBottom = '20px';
    invitationsDiv.appendChild(messageElement);
});
