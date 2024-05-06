import React, { useState } from 'react'

function FriendList() {
	const [name, setName] = useState('')
	const [friendType, setFriendType] = useState('')
	const [achaDosts, setAchaDosts] = useState([])
	const [buraDosts, setBuraDosts] = useState([])

	const handleNameChange = (event) => {
		setName(event.target.value)
	}

	const handleFriendTypeChange = (event) => {
		setFriendType(event.target.value)
	}

	const handleAddFriend = () => {
		if (friendType === 'achaDost') {
			setBuraDosts([...buraDosts, name]) // Add to buraDosts if achaDost is selected
		} else if (friendType === 'buraDost') {
			setAchaDosts([...achaDosts, name]) // Add to achaDosts if buraDost is selected
		}
		setName('')
	}

	return (
		<div>
			<h1>Friend List</h1>
			<input
				type="text"
				value={name}
				onChange={handleNameChange}
				placeholder="Enter friend's name"
			/>
			<select value={friendType} onChange={handleFriendTypeChange}>
				<option value="">Select friend type</option>
				<option value="achaDost">Acha Dost</option>
				<option value="buraDost">Bura Dost</option>
			</select>
			<button onClick={handleAddFriend}>Add Friend</button>
			<h2>Acha Dosts</h2>
			<ul>
				{achaDosts.map((friend, index) => (
					<li key={index}onClick={()=>revertUser}>{friend}</li>
				))}
			</ul>
			<h2>Bura Dosts</h2>
			<ul>
				{buraDosts.map((friend, index) => (
					<li key={index}>{friend}</li>
				))}
			</ul>
		</div>
	)
}

export default FriendList