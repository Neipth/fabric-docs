package com.example.docs;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import net.minecraft.particle.SimpleParticleType;
import net.minecraft.registry.Registries;
import net.minecraft.registry.Registry;
import net.minecraft.util.Identifier;

import net.fabricmc.api.ModInitializer;
import net.fabricmc.fabric.api.particle.v1.FabricParticleTypes;

//#entrypoint
public class FabricDocsReference implements ModInitializer {
	// Este Logger se utiliza para escribir texto en la consola y en el archivo de registro.
	// Se considera la mejor práctica usar el id de tu mod como nombre del logger.
	// De esta manera, está claro qué mod escribió la información, advertencias y errores.
	public static final String MOD_ID = "fabric-docs-reference";
	public static final Logger LOGGER = LoggerFactory.getLogger(MOD_ID);

	//#entrypoint
	//#particle_register_main
	// Este DefaultParticleType se llama cuando quieres usar tu partícula en el código.
	public static final SimpleParticleType SPARKLE_PARTICLE = FabricParticleTypes.simple();

	//#particle_register_main
	//#entrypoint
	@Override
	public void onInitialize() {
		// Este código se ejecuta tan pronto como Minecraft está en un estado listo para cargar mods.
		// Sin embargo, algunas cosas (como los recursos) pueden no estar inicializadas.
		// Procede con precaución.

		LOGGER.info("Hello Fabric world!");
		//#entrypoint

		//#particle_register_main
		// Registra nuestro tipo de partícula personalizado en el inicializador del mod.
		Registry.register(Registries.PARTICLE_TYPE, Identifier.of(MOD_ID, "sparkle_particle"), SPARKLE_PARTICLE);
		//#particle_register_main
		//#entrypoint
	}
}
