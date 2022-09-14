
puts "Clearing db..."
PetOwner.destroy_all
Pet.destroy_all
PetSitter.destroy_all
Appointment.destroy_all
PetOwner.reset_pk_sequence
Pet.reset_pk_sequence
PetSitter.reset_pk_sequence
Appointment.reset_pk_sequence

puts "🌱 Seeding..."


puts "Making pet owners..."                        
20.times {PetOwner.create!(name: Faker::FunnyName.name,
                           address: Faker::Address.street_name)} 


puts "Making pets..."
20.times {Pet.create(name: Faker::Creature::Dog.name,
                        animal: "Dog",
                        breed: Faker::Creature::Dog.breed,
                        age: rand(1..15),
                        size: "Medium",
                        image: Faker::Avatar.image(size: "200x200", set: "set3"),
                        pet_owner_id: rand(1..20))}


puts "Making pet sitters..."                           
20.times {PetSitter.create(name: Faker::FunnyName.name,
                         description: Faker::Lorem.paragraph(sentence_count: 2), 
                         image: Faker::Avatar.image(size: "200x200", set: "set1"),
                         rating: rand(1..5))}

puts "Making appointments..."

services=["Walking", "Drop-In", "House Sitting"]

40.times {Appointment.create(date: Faker::Date.between(from: '2022-06-01', to: '2022-06-30'), service: services.sample, pet_name: Pet.all.sample, pet_owner_id: rand(1..20), pet_sitter_id: rand(1..20)
    )}

puts "✅ Done seeding!"                  