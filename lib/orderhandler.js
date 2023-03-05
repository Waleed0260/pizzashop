export const create = async ({name, phone, address, total, PaymentMethod})=>{
    const response =  await fetch ('/api/order', {
        method: "POST",
        body: JSON.stringify({
            name: name,
            phone: phone,
            address: address,
            total: parseFloat(total),
            method: PaymentMethod,
            status: 1
        }),
    })
    const id = await response.json();
    return id;
}