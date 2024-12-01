import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  try {
    // Crear estados de posición
    await prisma.positionStatus.createMany({
      data: [
        { name: 'ACTIVE', description: 'Posición activa' },
        { name: 'CLOSED', description: 'Posición cerrada' },
        { name: 'DRAFT', description: 'Posición en borrador' },
        { name: 'ON_HOLD', description: 'Posición en espera' }
      ]
    });

    // Crear tipos de empleo
    await prisma.employmentType.createMany({
      data: [
        { name: 'FULL_TIME', description: 'Tiempo completo' },
        { name: 'PART_TIME', description: 'Tiempo parcial' },
        { name: 'CONTRACT', description: 'Contrato' },
        { name: 'INTERNSHIP', description: 'Práctica' }
      ]
    });

    // Crear tipos de entrevista
    await prisma.interviewType.createMany({
      data: [
        { name: 'PHONE_SCREENING', description: 'Entrevista telefónica inicial' },
        { name: 'TECHNICAL', description: 'Entrevista técnica' },
        { name: 'HR', description: 'Entrevista con RRHH' },
        { name: 'FINAL', description: 'Entrevista final' }
      ]
    });

    // Crear países iniciales
    await prisma.country.createMany({
      data: [
        { name: 'España', code: 'ES' },
        { name: 'México', code: 'MX' }
      ]
    });

    console.log('Seed completado exitosamente');
  } catch (error) {
    console.error('Error durante el seed:', error);
    throw error;
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  });
