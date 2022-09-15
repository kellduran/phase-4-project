# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_09_13_225937) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "appointments", force: :cascade do |t|
    t.date "date"
    t.string "service"
    t.string "time"
    t.string "pet_name"
    t.bigint "pet_owner_id", null: false
    t.bigint "pet_sitter_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_owner_id"], name: "index_appointments_on_pet_owner_id"
    t.index ["pet_sitter_id"], name: "index_appointments_on_pet_sitter_id"
  end

  create_table "pet_owners", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pet_sitters", force: :cascade do |t|
    t.string "name"
    t.text "description"
    t.string "image"
    t.integer "rating"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pets", force: :cascade do |t|
    t.string "name"
    t.string "animal"
    t.string "breed"
    t.integer "age"
    t.string "size"
    t.bigint "pet_owner_id", null: false
    t.string "image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["pet_owner_id"], name: "index_pets_on_pet_owner_id"
  end

  add_foreign_key "appointments", "pet_owners"
  add_foreign_key "appointments", "pet_sitters"
  add_foreign_key "pets", "pet_owners"
end
