from pydantic import BaseModel, EmailStr, Field


class UserCreate(BaseModel):
    email: EmailStr = Field(..., example="user@example.com")
    password: str = Field(..., min_length=8, example="strongpassword")

class UserOut(BaseModel):
    id: int
    email: EmailStr

    class Config:
        from_attributes = True