from sqlalchemy.orm import Mapped, mapped_column
from .mixin import IsActiveMixin, CreationDateMixin
from ..database.database_metadata import Base

class Client(Base, CreationDateMixin, IsActiveMixin):
    __tablename__ = "clients"

    id: Mapped[int] = mapped_column(primary_key=True)
    tg_id: Mapped[str] = mapped_column(nullable=True)
    name: Mapped[str] = mapped_column(nullable=True)
    surname: Mapped[str] = mapped_column(nullable=True)
    telephone: Mapped[str] = mapped_column(nullable=True)
    email: Mapped[str] = mapped_column(nullable=True)