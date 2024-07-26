import { ContactCard } from "../component/ContactCard";
import layout from "../layout";
import { Layout } from "../layout";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [],
		},
		actions: {
			getContacts: async () => {
				try {
					const resp = await fetch("https://playground.4geeks.com/contact/agendas/jadenC/contacts", {
						method: "GET",
						headers: {
							"Content-type": "application/json"
						}
					})
					if (!resp.ok) {
						throw new Error(`error status: ${resp.status}`)
					}
					let data = await resp.json()
					console.log(data)
					setStore({ contacts: data.contacts })
					return getStore().contacts
				} catch (error) {
					console.error("Error")
				}
			}
			, addContacts: async (name, phone, email, address,) => {
				try {
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/jadenC/contacts", {
						method: "POST",
						headers: {
							"Content-Type": "application/json"
						}, body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address,
						})
					});
					const user = await response.json();
					console.log("Current task being added:", user);
				} catch (error) {
					console.log("there was an error", error)
				}
			},
			updateContact: async (name, phone, email, address, id) => {
				try {
					const response = await fetch(
						`https://playground.4geeks.com/contact/agendas/jadenC/contacts/${id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json"
						}, body: JSON.stringify({
							"name": name,
							"phone": phone,
							"email": email,
							"address": address,
						})
					});
					const user = await response.json();
				} catch (error) {
					console.log("there was an error", error)
				}
			},
			deleteContact: async (id) => {
				try {
					await fetch(
						`https://playground.4geeks.com/contact/agendas/jadenC/contacts/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					});
					console.log("the deleted Contact is:", id);
					// setStore({
					// 	contacts: contacts.filter(contact => contact.id !== id)
					// });
					const newContacts = getStore().contacts.filter((t, currentIndex) => t.id !== id)
					getStore().contacts = newContacts
				} catch (error) {
					console.log("there was an error", error)
				}
			}
		}
	};
};

export default getState;
